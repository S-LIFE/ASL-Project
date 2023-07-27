import React from "react";
import { styled } from "styled-components";
import { AiFillBank, AiFillCaretRight } from "react-icons/ai";
import { BiCreditCard } from "react-icons/bi";

export const DonationInformation = () => {
  return (
    <Container>
      <ContentWrapper>
        <IconWrapper>
          <AiFillBank
            style={{
              fontSize: "48px",
            }}
          />
        </IconWrapper>
        <Title>銀行振込</Title>
        <Desc>
          〇〇銀行
          <br />
          〇〇支点
          <br />
          店番号 111
          <br />
          普通預金
          <br />
          口座番号 1234567
          <br />
          中島竜基（ナカジマタツキ）
        </Desc>
      </ContentWrapper>

      <ContentWrapper>
        <IconWrapper>
          <BiCreditCard style={{ fontSize: "48px" }} />
        </IconWrapper>
        <Title>クレジットカード決済</Title>

        <CardWrapper>
          <PriceWrapper>
            <AiFillCaretRight />
            <Price>5,000円</Price>
          </PriceWrapper>

          <PriceWrapper>
            <AiFillCaretRight />
            <Price>10,000円</Price>
          </PriceWrapper>

          <PriceWrapper>
            <AiFillCaretRight />
            <Price>50,000円</Price>
          </PriceWrapper>

          <PriceWrapper>
            <AiFillCaretRight />
            <Price>150,000円</Price>
          </PriceWrapper>
        </CardWrapper>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  margin: 80px 0;
  padding: 0 48px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media (max-width: 780px) {
    padding: 0 12px;
    display: block;
  }
`;

const ContentWrapper = styled.div`
  width: 410px;
  height: 340px;
  background-color: #ffffff;
  border-radius: 30px;
  text-align: left;
  padding: 24px;
  position: relative;

  @media (max-width: 780px) {
    margin: 0 auto;
    max-width: 410px;
    width: 100%;

    &:first-child {
      margin-bottom: 48px;
    }
  }
`;

const IconWrapper = styled.div`
  width: max-content;
  padding: 12px;
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);

  background-color: #ffffff;
  border-radius: 50%;
`;

const Title = styled.p`
  width: max-content;
  color: #000;
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 12px;
  text-align: center;
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
`;

const Desc = styled.p`
  width: max-content;
  color: #000;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  top: 124px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 124px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 240px;
  margin-bottom: 12px;

  &:hover {
    background-color: #e58c6c;
  }
`;

const Price = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 12px;
`;
