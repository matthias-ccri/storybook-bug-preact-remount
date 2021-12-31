/** @jsx h */
import { h } from 'preact';
import {useEffect} from 'preact/hooks';

export default {
    title: 'Repro',
};

function Component ({
    zzzzzzzz,
}) {
    // Using useEffect with an empty effects array is how you run code only when the component mounts.
    // See https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component
    useEffect(() => {
        console.log('Mounted');
    }, []);

    return (
        <div>
            <p>Open the browser console. Every time you change the control, it logs "Mounted".</p>
            {zzzzzzzz ? 'on' : 'off'}
        </div>
    );
}

export const Example = (args) => {
    return <Component {...args} />;
};
Example.args = {
    zzzzzzzz: true,
};



