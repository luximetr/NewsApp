import React from 'react';
import {NewsSourcesScreenView} from "./NewsSourcesScreenView";
import {NewsSourcesRepo} from "../../../../../app/repos/newsSourcesRepo/NewsSourcesRepo";
import {NewsSource} from "../../../../../model/model/newsSource/NewsSource";

interface Props {
   navigation: any
}

interface State {
   sources: NewsSource[]
}

export class NewsSourcesScreen extends React.Component<Props, State> {

   // Dependencies
   private newsSourcesRepo = new NewsSourcesRepo()

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         sources: []
      }
   }

   componentDidMount(): void {
      this.loadSources()
   }

   // Load sources
   private loadSources() {
      this.newsSourcesRepo
         .getNewsSources('entertainment', 'ru', 'ru')
         .then((result) => {
            if (result.data) {
               console.log(result.data)
               this.setState({sources: result.data})
            }
         })
   }

   // Back
   private onBack() {
      this.props.navigation.pop()
   }

   // View
   render() {
      return (
         <NewsSourcesScreenView
            onBack={this.onBack.bind(this)}
            sources={this.state.sources}
         />
      )
   }
}
