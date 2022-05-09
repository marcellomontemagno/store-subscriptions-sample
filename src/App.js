import {css} from '@emotion/css'
import Sidebar from "./components/Sidebar"
import Sections from "./components/Sections"
import ExecSummary from "./components/ExecSummary"
import AddSectionButton from "./components/AddSectionButton"

function App() {
  return (
    <div className={css`height:100%; display: flex; flex-direction: column;`}>
      <div className={css`flex: 0 0 50px; background: yellow;`}>
      </div>
      <div className={css`flex: 1 0 0; display: flex;`}>
        <div className={css`flex: 0 0 260px; background: grey;`}>
          <Sidebar/>
        </div>
        <div>
          <ExecSummary/>
          <Sections/>
          <AddSectionButton/>
        </div>
      </div>
    </div>
  );
}

export default App;
