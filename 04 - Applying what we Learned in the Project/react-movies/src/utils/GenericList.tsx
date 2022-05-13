import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListProps) {
    if (!props.list) {
        // we could have a custom loading control.. if passed, we would be using it
        if (props.loadingUI) {
            return props.loadingUI;
        }
        // otherwise we use the default Loading component
        return <Loading />
    } else if (props.list.length === 0) {
        if (props.emptyListUI) {
            return props.emptyListUI;
        }
        return <>There are no elements to display</>
    } else {
        // loads elements declared inside the body of <GenericList>
        return props.children;
    }
}

interface genericListProps {
    list: any;
    loadingUI?: ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
}