import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/routes';
import './App.css';

function App() {
    return (
        <>
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </>
    );
}

export default App;
