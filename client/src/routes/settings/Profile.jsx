import React from "react";
import styled from "styled-components";
import { FaUserCog, FaLock, FaTrash, FaUser } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import BackIcon from "../../components/BackIcon";
import { auth } from "../../firebase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
`;

const ProfilePicContainer = styled.div`
  margin-top: 60px; /* BackIcon과의 간격 */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h1`
  width: 25%;
  margin-top: 20px;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ddd; /* 밑줄 추가 */
  text-align: center;
`;

const LinkedAccountContainer = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* 항목 사이 간격 */
`;

const Icon = styled.div`
  font-size: 22px;
  color: #50c2c9;
  margin-right: 20px;
  margin-left: 20px;
`;

const Text = styled.div`
  font-size: 16px;
`;

const Email = styled.div`
  font-size: 14px;
  color: #a0a0a0; /* 연한 회색 */
  margin-left: 50px; /* 아이콘과 텍스트 사이 간격 조정 */
  margin-top: 5px; /* 상단 간격 조정 */
`;

const RightArrowIcon = styled(RiArrowRightSLine)`
  font-size: 20px;
  margin-left: auto; /* 오른쪽 끝으로 이동 */
`;

const DeleteContainer = styled.div`
  margin-top: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeleteIcon = styled(FaTrash)`
  font-size: 25px;
  color: #50c2c9;
  margin-bottom: 15px;
`;

const DeleteText = styled.div`
  font-size: 16px;
  color: #50c2c9;
`;

const Profile = () => {
  return (
    <Container>
      <BackIcon />
      <ProfilePicContainer>
        {/* <ProfilePic
          src="https://via.placeholder.com/120"
          alt="Profile"
        /> */}
        <FaUser
          size={40}
          color="#50c2c9"
        />
      </ProfilePicContainer>
      <Name>{auth.currentUser.displayName}</Name>
      <LinkedAccountContainer>
        <ItemContainer>
          <Icon>
            <FaUserCog />
          </Icon>
          <Text>계정 관리</Text>
          <Email>{auth.currentUser.email}</Email>
          <RightArrowIcon />
        </ItemContainer>
        <ItemContainer>
          <Icon>
            <FaLock />
          </Icon>
          <Text>비밀번호 관리</Text>
          <RightArrowIcon />
        </ItemContainer>
      </LinkedAccountContainer>
      {/* <DeleteContainer>
        <DeleteIcon />
        <DeleteText>Delete Account</DeleteText>
      </DeleteContainer> */}
    </Container>
  );
};

export default Profile;
