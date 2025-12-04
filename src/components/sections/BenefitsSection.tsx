import { BenefitItem } from "@/ui/BenefitItem";
import { Button } from "@/ui/Button";
import Ellipse8 from "@/components/ui/ellipses/Ellipse8";

export function BenefitsSection() {
    return (
        <section className="px-6 py-10 xl:px-91">
            <article className="gradient-benefit-card shadow-card relative rounded-2xl border border-gray-200 px-6 py-10 before:absolute before:top-0 before:left-1/2 before:block before:h-1 before:w-47.5 before:-translate-x-1/2 before:bg-white">
                <h2 className="mb-8 text-center text-3xl font-bold">What You Get When You Join Us</h2>
                <Ellipse8 />

                <div className="font-inter flex flex-col gap-6">
                    <BenefitItem
                        title="A Career, Not a Temporary Job"
                        description="You get long-term stability in a business that is actively growing, not declining. We invest in people who plan to grow with us, not hop from job to job."
                    />

                    <BenefitItem
                        title="Above-Average Skill Training"
                        description="You'll learn real seafood preparation, speed, precision, and customer handling. These are high-value hospitality skills that stay with you for life."
                    />

                    <BenefitItem
                        title="A Supportive Work Environment"
                        description="No toxic ego, no passive-aggressive culture. You'll work with people who actually take pride in their craft."
                    />

                    <BenefitItem
                        title="Clear Path for Growth"
                        description="If you perform, you'll never stay stuck in one role. We build leaders internally. We grow, you grow."
                    />

                    <BenefitItem
                        title="Strong Team Culture"
                        description="This is a family-style work culture where everyone relies on each other. If you value teamwork, you'll fit right in."
                    />

                    <BenefitItem
                        title="Respect & Fair Treatment"
                        description="We don't treat staff like replaceable labour. Your personality, ambition, and work ethic matter."
                    />

                    <Button variant="white">SEE IF YOU QUALIFY</Button>
                </div>
            </article>
        </section>
    );
}
