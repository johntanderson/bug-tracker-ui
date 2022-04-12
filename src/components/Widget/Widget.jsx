import React from "react";
import "./widget.css";
import UserItem from "./UserItem/UserItem";
import TransactionItem from "./TransactionItem/TransactionItem";

export function WidgetSM() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <UserItem
          name="Anna Keller"
          title="Software Engineer"
          img="/assets/images/male_avatar.png"
        />
        <UserItem
          name="Anna Keller"
          title="Software Engineer"
          img="/assets/images/male_avatar.png"
        />
        <UserItem
          name="Anna Keller"
          title="Software Engineer"
          img="/assets/images/male_avatar.png"
        />
        <UserItem
          name="Anna Keller"
          title="Software Engineer"
          img="/assets/images/male_avatar.png"
        />
        <UserItem
          name="Anna Keller"
          title="Software Engineer"
          img="/assets/images/male_avatar.png"
        />
      </ul>
    </div>
  );
}

export function WidgetLG() {
  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Recent Transactions</span>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <TransactionItem
          date="2 Jun 2021"
          name="Susan Carol"
          img="/assets/images/male_avatar.png"
          amount="$122.00"
          status="Approved"
        />
        <TransactionItem
          date="2 Jun 2021"
          name="Susan Carol"
          img="/assets/images/male_avatar.png"
          amount="$122.00"
          status="Pending"
        />
        <TransactionItem
          date="2 Jun 2021"
          name="Susan Carol"
          img="/assets/images/male_avatar.png"
          amount="$122.00"
          status="Declined"
        />
        <TransactionItem
          date="2 Jun 2021"
          name="Susan Carol"
          img="/assets/images/male_avatar.png"
          amount="$122.00"
          status="Approved"
        />
      </table>
    </div>
  );
}
