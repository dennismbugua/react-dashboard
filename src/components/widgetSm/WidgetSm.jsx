import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Companies Available</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQH0eaZAnMAAtg/company-logo_200_200/0?e=2159024400&v=beta&t=Gnc4JUrC25Ic6vtdURpYcj6UGnF1CJLx6SSnm76R4I4"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Starlaunch Technology</span>
            <span className="widgetSmUserTitle">Software Development</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQH0eaZAnMAAtg/company-logo_200_200/0?e=2159024400&v=beta&t=Gnc4JUrC25Ic6vtdURpYcj6UGnF1CJLx6SSnm76R4I4"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Starlaunch Technology</span>
            <span className="widgetSmUserTitle">Software Architech</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQH0eaZAnMAAtg/company-logo_200_200/0?e=2159024400&v=beta&t=Gnc4JUrC25Ic6vtdURpYcj6UGnF1CJLx6SSnm76R4I4"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">STL</span>
            <span className="widgetSmUserTitle">Software Engineering</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQH0eaZAnMAAtg/company-logo_200_200/0?e=2159024400&v=beta&t=Gnc4JUrC25Ic6vtdURpYcj6UGnF1CJLx6SSnm76R4I4"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Starlaunch Technology</span>
            <span className="widgetSmUserTitle">Business Analytics</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQH0eaZAnMAAtg/company-logo_200_200/0?e=2159024400&v=beta&t=Gnc4JUrC25Ic6vtdURpYcj6UGnF1CJLx6SSnm76R4I4"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Starlaunch Technology</span>
            <span className="widgetSmUserTitle">Project Management</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
