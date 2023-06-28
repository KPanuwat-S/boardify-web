export default function MemberInvitationBox({ users, clickSelect, member }) {
  return (
    <div>
      <div className="border border-gray-400 py-1 px-2 rounded-[4px] empty:border-none">
        {users
          .filter((el) => {
            const searchValue = member.toLowerCase();
            const usersLowerCase = el.email.toLowerCase();

            return (
              searchValue &&
              usersLowerCase.startsWith(searchValue) &&
              usersLowerCase !== searchValue
            );
          })
          .map((el) => (
            <div onClick={() => clickSelect(el)}>
              <div key={el.id}>
                {el.firstName} {el.lastName}
              </div>
              <div>{el.email}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
