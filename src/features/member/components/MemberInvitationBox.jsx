export default function MemberInvitationBox({ users, clickSelect, member }) {
  // console.log("--------- users : ", users);

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
            <div
              role="button"
              onClick={() => clickSelect(el)}
              className="font-light hover:bg-gray-100 p-2 rounded-[4px] my-1"
            >
              <div key={el.id} className="font-bold">
                {el.firstName} {el.lastName}
              </div>
              <div>{el.email}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
