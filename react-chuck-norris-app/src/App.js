import "./styles.css";
import { Route, Switch, NavLink } from "react-router-dom";

// useState
import Updater from "./components/00_useState/01_Updater";
import FunctionalUpdater from "./components/00_useState/02_FunctionalUpdater";
import LiftingState from "./components/00_useState/03_LiftingState";
import DerivedState from "./components/00_useState/04_DerivedState";
import MultipleStates from "./components/00_useState/05_MultipleStates";
import StateEnum from "./components/00_useState/06_StateEnum";
import CustomHook from "./components/00_useState/07_CustomHook";
import LazyInitializer from "./components/00_useState/08_LazyInitializer";
import FactOnUrl from "./components/00_useState/09_FactOnUrl";

//useEffect
import FactOnInput from "./components/01_useEffect/FactOnInput";
import FactOnInterval from "./components/01_useEffect/FactOnInterval";

// useRef
import FactOnSubmit from "./components/02_useRef/FactOnSubmit";
import FactOnSubmitRefactored from "./components/02_useRef/FactOnSubmitRefactored";
import FactOnUnmount from "./components/02_useRef/FactOnUnmount";

//useMemo
import MemoizeValue from "./components/05_performance/01_MemoizeValue";
import MemoizeFunction from "./components/05_performance/02_MemoizeFunction";

import ThemeButton from "./components/_shared/ThemeButton";
import ThemeButtonRefactored from "./components/_shared/ThemeButtonRefactored";
import { useTheme } from "./components/04_context/ThemeContext";

const MenuItem = ({ url, text, exact = false, category="" }) => {
  // console.log("rerendered");
  return (
    <li>
      <NavLink activeClassName="active" to={`${url}${category}`} exact={exact}>
        {text}
      </NavLink>
    </li>
  );
};

const routes = {
  updater: "/",
  functionalUpdater: "/functionalupdater",
  liftingState: "/liftingstate",
  derivedState: "/derivedstate",
  multipleStates: "/multiplestates",
  stateEnum: "/stateenum",
  customHook: "/customhook",
  lazyInitializer: "/lazyinitializer",
  onInput: "/oninput",
  onSubmit: "/onsubmit",
  onInterval: "/oninterval",
  onUnmount: "/onunmount",
  memoizeValue: "/memoizevalue",
  memoizeFunction: "/memoizeFunction",
  onUrl: "/onUrl",
};

export default function App() {
  const {
    updater,
    functionalUpdater,
    liftingState,
    derivedState,
    multipleStates,
    stateEnum,
    customHook,
    lazyInitializer,
    onInput,
    onSubmit,
    onInterval,
    onUnmount,
    memoizeValue,
    memoizeFunction, 
    onUrl
  } = routes;

  const [theme, setTheme] = useTheme();

  return (
    //  <div className="app">
    <div className={`app ${theme === "light" ? "app--light" : "app--dark"}`}>
      <nav>
        <ul>
          <div>
            <span>useState</span>
            <MenuItem url={updater} text="Updater" exact={true} />
            <MenuItem url={functionalUpdater} text="Functional Updater" />
            <MenuItem url={liftingState} text="Lifting State" />
            <MenuItem url={derivedState} text="Derived State" />
            <MenuItem url={multipleStates} text="Multiple States" />
            <MenuItem url={stateEnum} text="State Enum" />
            <MenuItem url={customHook} text="Custom Hook" />
            <MenuItem url={lazyInitializer} text="Lazy Initializer" />
            <MenuItem url={onUrl} text="On Url" category="/food"/>
          </div>
          <div>
            <span>useEffect</span>
            <MenuItem url={onInput} text="On Input" />
            <MenuItem url={onInterval} text="On Interval" />
          </div>
          <div>
            <span>useRef</span>
            <MenuItem url={onSubmit} text="On Submit" />
            <MenuItem url={onUnmount} text="On Unmount" />
          </div>
          <div>
            <span>Performance</span>
            <MenuItem url={memoizeValue} text="Memoize Value" />
            <MenuItem url={memoizeFunction} text="Memoize Function" />
          </div>
        </ul>
        <ThemeButton />
        {/* <ThemeButtonRefactored /> */}
      </nav>

      <h1>Tell me about Chuck Norris</h1>
      <Switch>
        <Route exact path={updater} component={Updater} />
        <Route path={functionalUpdater} component={FunctionalUpdater} />
        <Route path={liftingState} component={LiftingState} />
        <Route path={derivedState} component={DerivedState} />
        <Route path={multipleStates} component={MultipleStates} />
        <Route path={stateEnum} component={StateEnum} />
        <Route path={customHook} component={CustomHook} />
        <Route path={lazyInitializer} component={LazyInitializer} />
        <Route path={onInput} component={FactOnInput} />
        {/* <Route path={onSubmit} component={FactOnSubmitRefactored} /> */}
        <Route path={onSubmit} component={FactOnSubmit} />

        <Route path={onInterval} component={FactOnInterval} />
        <Route path={onUnmount} component={FactOnUnmount} />
        <Route path={memoizeValue} component={MemoizeValue} />
        <Route path={memoizeFunction} component={MemoizeFunction} />
        <Route path={`${onUrl}/:category`} component={FactOnUrl} />
      </Switch>
    </div>
  );
}
