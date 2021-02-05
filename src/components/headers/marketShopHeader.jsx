import React, { Component } from "react";
import Header from "../common/headers/header";
import HeaderLink from "../common/headers/headerLink";
import HeaderLinkDropDown from "../common/headers/headerLinkDropDown";
import HeaderCustomBlock from "../common/headers/headerCustomBlock";
import EmailHeaderLink from "../common/headers/emailHeaderlink";
import TelHeaderlink from "../common/headers/telHeaderLink";
import LanguageDropDown from "./languageDropDown";
import CurrencyDropDown from "./currencyDropDown";
import pic1 from "../../image/banner/cms-block.jpg";
import pic2 from "../../image/banner/responsive.jpg";
import UserHeader from "./userHeader";

class MarketShopHeader extends Component {
  state = {};
  headerId = "header";
  text =
    "این یک بلاک مدیریت محتواست. شما میتوانید هر نوع محتوای html نوشتاری یا تصویری را در آن قرار دهید. این یک متن است";

  render() {
    return (
      <Header headerId={this.headerId}>
        <HeaderLink link="#">تسویه حساب</HeaderLink>
        <HeaderLink link="#">لیست علاقه مندی (0)</HeaderLink>
        <HeaderLinkDropDown
          title="بلاک سفارشی"
          headerId={this.headerId}
          className="hidden-sm hidden-xs"
        >
          <HeaderCustomBlock
            imgLink={pic1}
            title="بلاک های محتوا"
            text={this.text}
            btnLink="http://www.kuff.ir"
            float="right"
          ></HeaderCustomBlock>
          <HeaderCustomBlock
            imgLink={pic2}
            title="بلاک های محتوا"
            text={this.text}
            btnLink="http://www.kuff.ir"
            float="right"
          ></HeaderCustomBlock>
        </HeaderLinkDropDown>
        <EmailHeaderLink>info@marketshop.com</EmailHeaderLink>
        <TelHeaderlink> 98778656 21+</TelHeaderlink>
        <LanguageDropDown
          liStyle={{ marginBottom: "0px" }}
          headerId={this.headerId}
        ></LanguageDropDown>
        <CurrencyDropDown
          title="تومان"
          headerId={this.headerId}
        ></CurrencyDropDown>
        <UserHeader liStyle={{ float: "left" }}></UserHeader>
      </Header>
    );
  }
}

export default MarketShopHeader;
