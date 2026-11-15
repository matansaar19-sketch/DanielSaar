import { StepNumberLabel } from "@/components/StepNumberLabel";

export type ProcessStep = {
  n: string;
  title: string;
  body: string;
};

// steps+: a dashed orange line runs behind the cards and shows in the gaps, linking the steps like a timeline.
const rowClassName =
  "relative flex w-full max-w-[312px] flex-col items-start gap-5 self-center steps:max-w-none steps:flex-row steps:flex-nowrap steps:items-stretch steps:justify-center steps:gap-[72px] steps:before:absolute steps:before:inset-x-10 steps:before:top-1/2 steps:before:border-t-2 steps:before:border-dashed steps:before:border-accent/55 steps:before:content-['']";

const cardClassName =
  "flex h-[237px] w-full shrink-0 flex-col items-start justify-center gap-1.5 rounded-lg p-4 text-right shadow-[0px_4px_2px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 steps:h-full steps:justify-start steps:w-[310px] steps:gap-1.5 steps:p-4";

/** `tone`: matches the section band. "brown" = business band, "paper" = personal (cream) band. */
const toneClasses = {
  brown: { card: "bg-brown-deep", text: "text-on-brown" },
  paper: { card: "bg-paper-light", text: "text-ink" },
  white: { card: "bg-white", text: "text-ink" },
} as const;

export function ProcessStepCards({ steps, tone = "white" }: { steps: ProcessStep[]; tone?: keyof typeof toneClasses }) {
  const t = toneClasses[tone];
  return (
    <div className={rowClassName}>
      {steps.map((s) => (
        <div key={s.n} className="relative flex w-full flex-row items-center self-stretch steps:w-auto">
          <div className={`${cardClassName} ${t.card}`}>
            <StepNumberLabel n={s.n} className="text-5xl tracking-[0.16px] steps:text-[60px]" />
            <div className="flex w-full flex-col items-start gap-1.5">
              <h3 className={`w-full text-right text-xl font-bold tracking-[0.16px] ${t.text} steps:text-[24px]`}>
                {s.title}
              </h3>
              <p className={`w-full max-w-none text-right text-xl font-normal tracking-[0.16px] ${t.text} steps:max-w-[280px] steps:text-[20px] steps:leading-7`}>
                {s.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
