import * as React from 'react';
import {TopBarScreenView} from "../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {BaseComponent} from "../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../model/custom/appearance/Appearance";

interface Props {
}

interface State {
  title: string
}

export class NewsFeedScreenView extends BaseComponent<Props, State> {

  renderWith(appearance: Appearance): any {
    return (
       <TopBarScreenView
          title={'News'}
       >
       </TopBarScreenView>
    )
  }
}
