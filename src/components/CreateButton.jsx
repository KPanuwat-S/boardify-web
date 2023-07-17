import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import MemberItem from "./Member/MemberItem";
import { useDispatch, useSelector } from "react-redux";
import { createWorkspaceAndInviteMember } from "../features/workspace/Slice/workspaceSlice";
import MemberInvitationBox from "../features/member/components/MemberInvitationBox";
import {
  addMemberAsnyc,
  clearMember,
  searchAddMember,
  searchUser,
} from "../features/member/slice/memberSlice";

function CreateButton() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [createWorkspaceData, setCreateWorkspaceData] = useState({
    createrId: "",
    name: "",
  });

  const users = useSelector((state) => state.member.userdata);
  console.log("lllllll", users);
  const members = useSelector((state) => state.member.memberdata);

  const [memberList, setMemberList] = useState([]);
  const [member, setMember] = useState("");
  const [searchValue, setSearchValue] = useState("");

  console.log("pppppppppp", { value: searchValue });

  const [index, setIndex] = useState(1);

  useEffect(() => {
    setIndex(1);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(searchUser({ value: searchValue }));
    }, 200);

    return () => {
      clearTimeout(id);
    };
  }, [searchValue]);

  useEffect(() => {
    const memberIndex = memberList.findIndex((el) => el.id == members.id);
    console.log("members", members, "members");
    if (members?.id && memberIndex == -1) {
      setMemberList([...memberList, members]);
    }
  }, [members]);

  useEffect(() => {
    console.log("memberList", memberList);
  }, [memberList]);

  const onClose = () => {
    setOpen(false);
    setIndex(1);
    setCreateWorkspaceData("");
  };

  const changeDataHandler = (e) => {
    setCreateWorkspaceData((prevData) => {
      const data = { ...prevData };
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const addMember = async (e) => {
    try {
      e.preventDefault();
      await dispatch(searchAddMember({ value: member })).unwrap;
      setMember("");
    } catch (error) {
      console.log(error);
    }
  };

  const checkMemberList = (e) => {
    e.preventDefault();
    console.log("memberList fir", memberList);
  };

  const submitInput = async (e) => {
    e.preventDefault();
    console.log("data", createWorkspaceData);
    e.stopPropagation();
    console.log("submit data", { ...createWorkspaceData, members: memberList });
    dispatch(
      createWorkspaceAndInviteMember({
        ...createWorkspaceData,
        members: memberList,
      })
    );
    onClose();
    window.location.reload();
  };

  const memberHandler = (e) => {
    setMember(e.target.value);
    setSearchValue(e.target.value);
    console.log("-+-+-+-+-+-+-", e.target.value);
  };

  const deleteMemberHandler = (id) => {
    const filterdMeber = memberList.filter((el, idx) => idx !== id);
    setMemberList(filterdMeber);
  };

  const clickSelect = (el) => {
    setMember(el.email);
  };

  const elementIfIndexIsOne = (
    <>
      <h1 className="text-gray-800 text-center font-light mb-10">
        Boost your productivity by making it easier for everyone to access
        boards in one location.
      </h1>
      <div className="flex items-center justify-center">
        <img
          className="w-[300px]"
          src="https://img.freepik.com/free-vector/hand-drawn-business-planning_52683-76248.jpg?w=1380&t=st=1687356105~exp=1687356705~hmac=bc1d6ce4959b823f4c2d738558671b479c7723ea71183e40ffd2fa0324394e21"
          alt=""
        />
      </div>
      <form
        action={() => {
          console.log("test");
        }}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Workspace name</label>
          <input
            className="border border-gray-400 p-2 rounded-[4px]"
            type="text"
            id="name"
            name="name"
            value={createWorkspaceData.workspaceName}
            onChange={changeDataHandler}
          />

          <div className="flex items-center justify-center mt-4">
            <button
              className="w-[120px] bg-blue-600 rounded-[4px] p-2 text-white"
              onClick={() => {
                setIndex(2);
              }}
              //
            >
              NEXT
            </button>
          </div>
        </div>
      </form>
    </>
  );

  const elementIfIndexIsTwo = (
    <>
      {" "}
      <form action={() => {}}>
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-800 text-center font-light ">
            Invite your member to increase the productivity!
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
            <button
              className="w-[120px] bg-gray-300 rounded-[4px] p-2 text-white"
              onClick={submitInput}
              //
            >
              Invite Later
            </button>
            <button
              className="w-[120px] bg-blue-600 rounded-[4px] p-2 text-white"
              onClick={submitInput}

              //
            >
              COMPLETE
            </button>
          </div>
        </div>
      </form>
    </>
  );

  // UI
  return (
    <div
      role="button"
      className=" bg-blue-600 hover:bg-blue-700 duration-200 text-white py-1 px-2 rounded-[4px] focus:outline-none focus:ring focus:ring-gray-300"
      onClick={() => {
        setOpen(true);
      }}
    >
      CREATE
      <Modal
        title="Create New Workspace"
        open={open}
        onClose={onClose}
        width={35}
      >
        <div className="px-10 h-[600px]">
          {index === 1 && elementIfIndexIsOne}
          {index === 2 && elementIfIndexIsTwo}
        </div>
      </Modal>
    </div>
  );
}

export default CreateButton;
