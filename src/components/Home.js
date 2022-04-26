import Notes from './Notes';

export const Home = (props) => {

    return (
        <div> 
            <Notes handleAlert={props.handleAlert}/>
        </div>
    )
}
