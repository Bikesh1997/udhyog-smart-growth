"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Check,
  CreditCard,
  FileText,
  Loader2,
  TrendingUp,
  Activity,
  AlertTriangle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

/**
 * IMPLEMENTS
 * 1) AI-powered dynamic analysis mock (cash flow, revenue, expenses, benchmarking)
 * 2) Predictive cash flow for 30/60/90 days with shortfall detection + suggestions
 * 3) Risk alerts (declining sales, expense spikes, low runway, etc.)
 * 4) Pre-approved offers (worded as "credit options" to avoid loan terminology)
 * 5) Stepper UX: large dots, connecting lines, checkmarks when completed; no labels
 * 6) No GST field (per user request)
 */

const docSteps = [
  { id: "cibil", icon: CreditCard },
  { id: "itr", icon: FileText },
  { id: "bankStatement", icon: Building },
] as const;

type DocStepId = (typeof docSteps)[number]["id"];

type Analysis = {
  kpis: {
    cashFlowStatus: "Healthy" | "Tight" | "Critical";
    revenueGrowthPct: number; // MoM
    expenseOptimizationNote: string;
    benchmarkPercentile: number; // 0-100
  };
  forecast: Array<{ day: number; date: string; projectedCash: number }>;
  threshold: number; // min comfortable cash
  shortfalls: Array<{ from: number; to: number; minCash: number }>; // day indices
  risks: Array<{ id: string; title: string; detail: string; severity: "low" | "medium" | "high" }>;
  offers: Array<{ id: string; name: string; limit: string; rate: string; type: string }>;
};

const mockRunAI = (seed = 1): Analysis => {
  // deterministic-ish simple generator
  const rand = (n: number) => {
    seed = (seed * 9301 + 49297) % 233280;
    return (seed / 233280) * n;
  };

  const today = new Date();
  const days = 90;
  const threshold = 200_000; // ₹2,00,000 comfortable minimum
  const base = 450_000 + rand(100_000); // starting cash

  const forecast: Analysis["forecast"] = Array.from({ length: days }, (_, i) => {
    // simulate seasonality + trend + noise
    const trend = i * 1_200; // slow build-up
    const season = Math.sin((i / 14) * Math.PI) * 40_000; // bi-weekly swings
    const noise = rand(30_000) - 15_000;
    const outflows = 380_000 + Math.max(0, Math.sin((i / 7) * Math.PI) * 25_000);
    const inflows = 400_000 + trend + season + noise;
    const projectedCash = Math.max(0, base + inflows - outflows - i * 5_000);
    const d = new Date(today);
    d.setDate(d.getDate() + i + 1);
    return {
      day: i + 1,
      date: d.toLocaleDateString("en-IN", { month: "short", day: "2-digit" }),
      projectedCash,
    };
  });

  // detect shortfall windows vs threshold
  const shortfalls: Analysis["shortfalls"] = [];
  let activeStart: number | null = null;
  let minCash = Infinity;

  forecast.forEach((p, idx) => {
    if (p.projectedCash < threshold) {
      if (activeStart === null) activeStart = idx;
      if (p.projectedCash < minCash) minCash = p.projectedCash;
    } else if (activeStart !== null) {
      shortfalls.push({ from: activeStart + 1, to: idx, minCash });
      activeStart = null;
      minCash = Infinity;
    }
  });
  if (activeStart !== null) {
    shortfalls.push({ from: activeStart + 1, to: forecast.length, minCash });
  }

  const shortfallCount = shortfalls.length;

  const analysis: Analysis = {
    kpis: {
      cashFlowStatus: shortfallCount === 0 ? "Healthy" : shortfallCount < 3 ? "Tight" : "Critical",
      revenueGrowthPct: Math.round(8 + rand(10)),
      expenseOptimizationNote: "Ops, logistics, and utilities show 6–9% savings potential.",
      benchmarkPercentile: Math.round(65 + rand(20)),
    },
    forecast,
    threshold,
    shortfalls,
    risks: [
      shortfallCount
        ? {
            id: "runway",
            title: "Low cash runway",
            detail: `Projected balance dips below ₹${(threshold / 1_000).toFixed(0)}k in ${shortfallCount} window(s).`,
            severity: shortfallCount > 2 ? "high" : "medium",
          }
        : {
            id: "stable",
            title: "Stable liquidity",
            detail: "No shortfalls detected in the next 90 days.",
            severity: "low",
          },
      {
        id: "sales",
        title: "Softening revenue trend",
        detail: "Trailing 4-week momentum is below the 12-week average.",
        severity: "medium",
      },
      {
        id: "expense",
        title: "Expense spikes detected",
        detail: "Utilities and logistics volatility above peer median.",
        severity: "low",
      },
    ],
    offers: [
      { id: "wc-flex", name: "Working Capital Facility (ABCL)", limit: "Up to ₹50L", rate: "from 8.5%", type: "working-capital" },
      { id: "pl-smart", name: "Proactive Personal Credit (ABCL)", limit: "Up to ₹20L", rate: "from 10.5%", type: "personal" },
      { id: "stul-easy", name: "Short-Term Utility Credit (ABCL)", limit: "Up to ₹15L", rate: "from 9.5%", type: "stul" },
    ],
  };
  return analysis;
};

const Stepper: React.FC<{ current: number }> = ({ current }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      {docSteps.map((s, i) => (
        <React.Fragment key={s.id}>
          <div
            className={`flex items-center justify-center rounded-full w-12 h-12 text-white text-lg font-bold transition-all duration-300 shadow ${
              i < current ? "bg-green-500" : i === current ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Step ${i + 1}`}
          >
            {i < current ? <Check className="w-6 h-6" /> : i + 1}
          </div>
          {i < docSteps.length - 1 && (
            <div
              className={`w-16 sm:w-20 h-1 rounded-full transition-colors duration-300 ${
                i < current ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const KPI: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
  badge?: string;
  tone?: "default" | "good" | "warn" | "bad";
}> = ({ title, value, icon, badge, tone = "default" }) => (
  <Card className="hover:shadow-md transition-shadow h-full">
    <CardHeader className="pb-2">
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon}
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-end justify-between">
        <div
          className={`text-2xl font-semibold ${
            tone === "good"
              ? "text-green-600"
              : tone === "bad"
              ? "text-red-600"
              : tone === "warn"
              ? "text-amber-600"
              : "text-foreground"
          }`}
        >
          {value}
        </div>
        {badge && <Badge variant="secondary">{badge}</Badge>}
      </div>
    </CardContent>
  </Card>
);

const currencyShort = (v: number) => `₹${(v / 1_000).toFixed(0)}k`;
const currencyFull = (v: number) => `₹${v.toLocaleString("en-IN")}`;

const ForecastChart: React.FC<{ data: Analysis["forecast"]; threshold: number }> = ({ data, threshold }) => (
  <div className="h-72 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" minTickGap={24} />
        <YAxis tickFormatter={(v) => currencyShort(Number(v))} />
        <Tooltip formatter={(v: number) => currencyFull(v)} />
        <ReferenceLine
          y={threshold}
          stroke="#94a3b8"
          strokeDasharray="6 4"
          label={{ value: "Comfort Threshold", position: "right" }}
        />
        <Line type="monotone" dataKey="projectedCash" stroke="#2563eb" dot={false} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const RiskBadge: React.FC<{ severity: "low" | "medium" | "high" }> = ({ severity }) => {
  const map = {
    low: "bg-green-100 text-green-800",
    medium: "bg-amber-100 text-amber-800",
    high: "bg-red-100 text-red-800",
  } as const;
  return <span className={`px-2 py-0.5 text-xs rounded ${map[severity]}`}>{severity.toUpperCase()}</span>;
};

const FinancialHealthDetails: React.FC = () => {
  const [step, setStep] = useState(1); // 1=software, 2=docs, 3=loading, 4=report
  const [docStep, setDocStep] = useState(0);
  const [selectedSoftware, setSelectedSoftware] = useState<string>("");
  const [checked, setChecked] = useState<Record<DocStepId, boolean>>({
    cibil: false,
    itr: false,
    bankStatement: false,
  });
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  const handleSoftwareConnect = (software: string) => {
    setSelectedSoftware(software);
    setStep(2);
  };

  const handleCheckboxChange = (id: DocStepId, value: boolean) => {
    setChecked((p) => ({ ...p, [id]: value }));
  };

  const handleNextDocStep = () => {
    if (docStep < docSteps.length - 1) {
      setDocStep((p) => p + 1);
    } else {
      setStep(3);
    }
  };

  // Simulate AI run during loading
  useEffect(() => {
    if (step === 3) {
      const t = setTimeout(() => {
        const res = mockRunAI(7);
        setAnalysis(res);
        setStep(4);
      }, 1600);
      return () => clearTimeout(t);
    }
  }, [step]);

  // ---- STEP 1: Connect to Accounting Software (removed "Upload Financial Statements") ----
  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold">Connect to Accounting Software</h2>
          <p className="text-muted-foreground">Use Tally or Zoho Books to sync data</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Button
            variant="outline"
            className="justify-start gap-3 p-4 h-auto hover:bg-primary/5 transition-all border-dashed"
            onClick={() => handleSoftwareConnect("tally")}
          >
            <img src="/logos/tally.png" alt="Tally" width={28} height={28} />
            <span className="font-medium">Tally</span>
          </Button>

          <Button
            variant="outline"
            className="justify-start gap-3 p-4 h-auto hover:bg-primary/5 transition-all border-dashed"
            onClick={() => handleSoftwareConnect("zoho")}
          >
            <img src="/logos/zoho.png" alt="Zoho Books" width={28} height={28} />
            <span className="font-medium">Zoho Books</span>
          </Button>
        </div>

        <Card className="border-dashed">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Why connect?</CardTitle>
            <CardDescription>Get dynamic cash flow forecasts, risk alerts, and tailored credit options.</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="text-sm text-muted-foreground space-y-1">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Faster insights</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Automated risk monitoring</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Personalized credit options</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ---- STEP 2: Document Stepper (No labels) ----
  if (step === 2) {
    const current = docStep;
    const currentDoc = docSteps[docStep];

    return (
      <div className="space-y-6">
        <Stepper current={current} />

        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <currentDoc.icon className="w-5 h-5" /> Provide {currentDoc.id.replace(/([A-Z])/g, " $1").toUpperCase()}
            </CardTitle>
            <CardDescription>Tick once the document is connected or uploaded.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Checkbox
                id={currentDoc.id}
                checked={checked[currentDoc.id]}
                onCheckedChange={(v) => handleCheckboxChange(currentDoc.id, Boolean(v))}
              />
              <Label htmlFor={currentDoc.id} className="flex items-center gap-2 cursor-pointer">
                <ShieldCheck className="w-4 h-4 text-primary" /> Confirmed
              </Label>
            </div>
          </CardContent>
        </Card>

        <Button
          className="w-full h-11"
          disabled={!checked[currentDoc.id]}
          onClick={handleNextDocStep}
        >
          {docStep < docSteps.length - 1 ? (
            <span className="flex items-center gap-2">
              Next <ArrowRight className="w-4 h-4" />
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Run AI Assessment <Activity className="w-4 h-4" />
            </span>
          )}
        </Button>
      </div>
    );
  }

  // ---- STEP 3: Loading + Promo ----
  if (step === 3) {
    return (
      <div className="flex flex-col items-center justify-center h-80 space-y-6 text-center">
        <div className="flex items-center gap-3">
          <Loader2 className="animate-spin h-6 w-6 text-primary" />
          <p className="text-lg font-medium">Analyzing your financial data…</p>
        </div>

        <Card className="w-full max-w-md border-2 border-primary/20 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle>Smart Business Perks</CardTitle>
            <CardDescription>Insights & flexible credit options tailored to you</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm mb-3">Unlock proactive facilities aligned to upcoming cash needs.</p>
            <div className="bg-primary/10 p-3 rounded-lg text-center">
              <p className="font-semibold text-primary">ABCL Advantage</p>
              <p className="text-sm text-muted-foreground">Preferential rates • Quick onboarding</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ---- STEP 4: AI-Powered Dashboard ----
  const tone =
    analysis?.kpis.cashFlowStatus === "Healthy"
      ? "good"
      : analysis?.kpis.cashFlowStatus === "Tight"
      ? "warn"
      : "bad";

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold">AI-Powered Financial Health & Risk Assessment</h2>
        <p className="text-muted-foreground">
          Dynamic insights from {selectedSoftware ? selectedSoftware.toUpperCase() : "your data"}
        </p>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          title="Cash Flow"
          value={analysis ? analysis.kpis.cashFlowStatus : "—"}
          icon={<TrendingUp className="w-4 h-4 text-muted-foreground" />}
          tone={tone as any}
          badge="AI Rated"
        />
        <KPI
          title="Revenue Trend (MoM)"
          value={`${analysis ? analysis.kpis.revenueGrowthPct : 0}%`}
          icon={<Activity className="w-4 h-4 text-muted-foreground" />}
          tone={analysis && analysis.kpis.revenueGrowthPct >= 10 ? "good" : "default"}
          badge="Momentum"
        />
        <KPI
          title="Expense Pattern"
          value={analysis ? analysis.kpis.expenseOptimizationNote : "—"}
          icon={<FileText className="w-4 h-4 text-muted-foreground" />}
          badge="Optimization"
        />
        <KPI
          title="Industry Benchmark"
          value={`${analysis ? analysis.kpis.benchmarkPercentile : 0}th pct.`}
          icon={<ShieldCheck className="w-4 h-4 text-muted-foreground" />}
          badge="Peer Rank"
        />
      </div>

      {/* Forecast + Shortfalls */}
      <Card className="hover:shadow-sm transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Predictive Cash Flow (Next 90 Days)</span>
            <Badge variant="secondary">30 / 60 / 90-day view</Badge>
          </CardTitle>
          <CardDescription>
            AI forecasts upcoming cash positions and flags shortfalls vs your comfort threshold.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {analysis && (
            <>
              <ForecastChart data={analysis.forecast} threshold={analysis.threshold} />
              {analysis.shortfalls.length > 0 ? (
                <div className="space-y-2">
                  <div className="text-sm font-medium flex items-center gap-2 text-amber-700">
                    <AlertTriangle className="w-4 h-4" /> Shortfall windows detected:
                  </div>
                  <ul className="text-sm pl-5 space-y-1">
                    {analysis.shortfalls.map((w, idx) => (
                      <li key={idx} className="list-disc">
                        Days {w.from}–{w.to} • Minimum {currencyFull(w.minCash)}. Suggest exploring ABCL working capital facility.
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="text-sm text-green-700">No shortfalls predicted. Liquidity looks comfortable.</div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Risk Alerts */}
      <Card className="hover:shadow-sm transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle>Risk Alerts</CardTitle>
          <CardDescription>Proactive flags to keep finances resilient</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          {analysis?.risks.map((r) => (
            <div
              key={r.id}
              className="flex items-start justify-between rounded-lg border p-3 hover:bg-muted/30 transition-colors"
            >
              <div>
                <div className="font-medium flex items-center gap-2">
                  {r.title}
                  <RiskBadge severity={r.severity} />
                </div>
                <p className="text-sm text-muted-foreground">{r.detail}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pre-approved Credit Options */}
      <Card className="border-primary/30 hover:shadow-sm transition-shadow">
        <CardHeader>
          <CardTitle>Pre‑approved Offers (ABCL)</CardTitle>
          <CardDescription>Tailored credit options based on your cash flow profile</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {analysis?.offers.map((o) => (
              <Card
                key={o.id}
                className="border hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{o.name}</CardTitle>
                  <CardDescription className="capitalize">{o.type.replaceAll("-", " ")}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{o.limit}</span>
                    <Badge variant="secondary">{o.rate}</Badge>
                  </div>
                  <Button className="w-full mt-3" variant="default">
                    View Offer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialHealthDetails;
