import { useState } from 'react';
import AgeRequester from '../../components/age-requester/age-requester';


const DemoAjax = () => {

    const [query, setQuery] = useState(null);

    const handleTest = () => {
        setQuery('Jeremy');
    };

    return (
        <div>
            {/* ↓ A remplacer par le formulaire de recherche */}
            <button onClick={handleTest}>Requete !</button>

            <div>
                {/* ↓ Composant que réalise la requete Ajax */}
                {query !== null && (
                    <AgeRequester name={query} />
                )}
            </div>
        </div>
    );
};

export default DemoAjax;