import {CoreComponent, PlaceHolderModel} from "../types";
import React from "react";
import PlaceHolder from "./common/placeholder";



export abstract class AbstractCoreComponent<Model extends CoreComponent> extends React.Component<Model> {

    public static defaultProps = {
        hidePlaceHolder: false,
    };

    abstract isEmpty():boolean;

    __hidePlaceHolder():boolean{
        return this.props.hidePlaceHolder;
    }

    __renderPlaceHolder(title?:string):JSX.Element{
        return(
            <PlaceHolder
                hidePlaceHolder={this.__hidePlaceHolder()}
                isEmpty={this.isEmpty()}
                componentTitle={title}
            />
        )
    }

}