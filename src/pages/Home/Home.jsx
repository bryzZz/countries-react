import classes from './Home.module.scss';
import { Filters } from 'components/Filters';
import { Countries } from 'components/Countries';

export const Home = () => {
    return (
        <main className={classes.main}>
            <Filters />
            <Countries />
        </main>
    );
};
