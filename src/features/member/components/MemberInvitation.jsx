import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberItem from "../../../components/Member/MemberItem";
import {
  searchAddMember,
  searchUser,
  addMemberAsnyc,
  clearMember,
} from "../slice/memberSlice";
import MemberInvitationBox from "./MemberInvitationBox";

export default function MemberInvitation({
  workspaceId,
  setFetch,
  fetchDelete,
  onClose,
}) {
  const [memberList, setMemberList] = useState([]);
  const [member, setMember] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const users = useSelector((state) => state.member.userdata);
  const members = useSelector((state) => state.member.memberdata);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(searchUser({ value: searchValue }));
    }, 200);

    return () => {
      clearTimeout(id);
    };
  }, [searchValue]);

  const clickSelect = (el) => {
    setMember(el.email);
  };

  useEffect(() => {
    const memberIndex = memberList.findIndex((el) => el.id == members.id);
    console.log("members", members, "members");
    if (members?.id && memberIndex == -1) {
      setMemberList([...memberList, members]);
    }
  }, [members]);

  const addMember = async (e) => {
    try {
      e.preventDefault();
      await dispatch(searchAddMember({ value: member })).unwrap;

      setMember("");
    } catch (error) {
      console.log(error);
    }
  };

  const memberHandler = (e) => {
    setMember(e.target.value);
    setSearchValue(e.target.value);
  };

  const submitInput = async (e) => {
    try {
      e.preventDefault();

      const memberAll = memberList;
      const data = { workspaceId: workspaceId, memberAll };
      // setCreateWorkspaceData((prev) => {
      //   const data = { ...prev };
      //   console.log("testmembers", { ...data, memberAll });
      //   return { ...data, memberAll };
      // });
      await dispatch(addMemberAsnyc(data)).unwrap();
      setMember("");
      setMemberList([]);
      setFetch(!fetchDelete);
      dispatch(clearMember()).unwrap();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMemberHandler = (id) => {
    const filterdMeber = memberList.filter((el, idx) => idx !== id);
    setMemberList(filterdMeber);
  };

  useEffect(() => {
    console.log("memberList", memberList);
  }, [memberList]);

  return (
    <form onSubmit={submitInput} className="overflow-visible">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-800 text-center font-light ">
          Invite your memberList to increase the productivity!
        </h1>
        <div className="flex items-center justify-center w-[250px] mx-auto">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-colorful-innovation-concept_52683-76158.jpg?w=2000&t=st=1687356042~exp=1687356642~hmac=4fa0f2a4438406de8ea2ed3d701ff645d6b6ce69cdd23c19309d8fa829eb56de"
            alt="Add Memmber Picture"
          />
        </div>
        <div className="flex items-start justify-center gap-5 mb-5">
          <div>
            <input
              className="border border-gray-400 py-1 px-2 rounded-[4px]"
              type="text"
              id="memberName"
              name="memberName"
              value={member}
              onChange={memberHandler}
              placeholder="Search by email"
            />

            <MemberInvitationBox
              users={users}
              clickSelect={clickSelect}
              member={member}
            />
          </div>

          <button
            className="font-light rounded-full w-10 h-10 hover:text-white border border-gray-100 hover:bg-blue-600"
            onClick={addMember}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <div className="flex flex-col gap-2 h-[240px] overflow-scroll">
          {memberList.length > 0 && <hr className="mb-5" />}
          {memberList.map((el, idx) => (
            <div className="flex justify-between">
              <MemberItem
                firstName={el.firstName}
                lastName={el.lastName}
                email={el.email}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteMemberHandler(idx);
                }}
                className="border hover:bg-gray-100 rounded-full h-10 w-10"
              >
                <i class="fa-regular fa-trash-can text-gray-400"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-5 items-center justify-center mt-4 pb-4">
          <input
            className="w-[120px] bg-blue-600 rounded-[4px] mb-5 p-2 text-white cursor-pointer"
            onClick={submitInput}
            type="submit"
            value="Complete"
            role="button"
          />
        </div>
      </div>
    </form>
  );
}
