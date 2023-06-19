import styled from "@emotion/styled";

export const HeroFreeDetail = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
`;

export const FreeDetailCardElement = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  gap: 20px;
  min-height: 600px;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export const RightContentFree = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const DescriptionDetailFree = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 28px;
  width: 50%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
