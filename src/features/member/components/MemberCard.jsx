import MemberEventInCard from "./MemberEventInCard";

export default function MemberCard({ memberInCard, workspaceId }) {
  return (
    <div className="flex flex-col gap-10 justify-between">
      {/* Info, Edit Member Card */}

      {memberInCard.map((el, idx) => (
        <MemberEventInCard key={el.User.id} item={el} workspaceId={workspaceId} />
      ))}
    </div>
  );
}
