import MemberEventInCard from "./MemberEventInCard";

export default function MemberCard({ memberInCard, workspaceId, setFetch, fetchDelete }) {
  return (
    <div className="flex flex-col gap-10 justify-between">
      {/* Info, Edit Member Card */}

      {memberInCard.map((el, idx) => (
        <MemberEventInCard key={el.User.id} item={el} wsId={workspaceId} setFetch={setFetch} fetchDelete={fetchDelete} />
      ))}
    </div>
  );
}
