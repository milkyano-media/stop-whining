import { RequirementCard } from "@/ui/RequirementCard";
import { ChecklistItem } from "@/ui/ChecklistItem";
import { Button } from "@/ui/Button";
import Ellipse4 from "@/components/ui/ellipses/Ellipse4";
import Ellipse5 from "@/components/ui/ellipses/Ellipse5";
import Ellipse6 from "@/components/ui/ellipses/Ellipse6";
import Ellipse7 from "@/components/ui/ellipses/Ellipse7";

export function RequirementsSection() {
    return (
        <section className="mb-7">
            <div className="font-inter mb-20 flex flex-col gap-4 px-6 xl:mb-65 xl:gap-10 xl:px-92.5">
                <RequirementCard
                    title="QUALITIES"
                    ellipse={<Ellipse4 />}
                    footnote="*Note: we value someone who has unique personality with charisma, confidence, and ambitions."
                >
                    <ChecklistItem>Approachable, charismatic, easy to talk to</ChecklistItem>
                    <ChecklistItem>A fast learner</ChecklistItem>
                    <ChecklistItem>Quick with hands</ChecklistItem>
                    <ChecklistItem>Open to feedback & criticsm</ChecklistItem>
                    <ChecklistItem>Mentally strong</ChecklistItem>
                    <ChecklistItem>Big confidence in skills</ChecklistItem>
                    <ChecklistItem>Able to work under pressure</ChecklistItem>
                </RequirementCard>

                <RequirementCard
                    title="SEAFOOD KNOWLEDGE"
                    ellipse={<Ellipse5 />}
                    footnote="*BONUS: Grew up by the coast & and have experience in prepping seafood."
                >
                    <ChecklistItem>Basic Understanding of Oysters & seafood in general</ChecklistItem>
                    <ChecklistItem>Has eaten a variety of seafood growing up</ChecklistItem>
                </RequirementCard>

                <RequirementCard title="AGE RANGE" ellipse={<Ellipse6 />}>
                    <p>Let&apos;s Keep it Simple:</p>
                    <ChecklistItem>This slot is only for 20-30 yrs old</ChecklistItem>
                </RequirementCard>

                <RequirementCard title="AVAILABILITY" ellipse={<Ellipse7 />}>
                    <ChecklistItem>Available 12PM onwards</ChecklistItem>
                    <ChecklistItem>Must be willing to work Night Shift until 10PM</ChecklistItem>
                    <ChecklistItem>Full Time Position (Committed)</ChecklistItem>
                </RequirementCard>
            </div>

            <div>
                <Button variant="secondary">SEE IF YOU QUALIFY</Button>
            </div>
        </section>
    );
}
