import * as React from 'react';
import styles from "./header.module.scss";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Header extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <header className={styles.header}>
            <h1 className={styles.title}>Country Information Finder</h1>
            <h2 className={styles.instructions}>Type a country's IOS code into the search bar to get that country's information</h2>
        </header> );
    }
}
 
export default Header;