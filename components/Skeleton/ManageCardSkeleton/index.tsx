import {
  ProfileSection,
  SkeletonCardWrapper,
  ProfileImage,
  ProfileInfo,
  Nickname,
  Info,
  ButtonSection,
  ButtonSkeleton,
  SkeletonContainer,
} from "./styled";
export default function ManageCardSkeletion() {
  return (
    <SkeletonContainer>
      {[...Array(4)].fill("").map((index) => {
        return (
          <SkeletonCardWrapper key={index}>
            <ProfileSection>
              <ProfileImage />
              <ProfileInfo>
                <Nickname />
                <Info />
              </ProfileInfo>
            </ProfileSection>
            <ButtonSection>
              <ButtonSkeleton />
              <ButtonSkeleton />
              <ButtonSkeleton />
              <ButtonSkeleton />
            </ButtonSection>
          </SkeletonCardWrapper>
        );
      })}
    </SkeletonContainer>
  );
}
