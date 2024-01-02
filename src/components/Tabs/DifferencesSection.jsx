import { useState } from 'react';
import Button from '../Button/Button';
import { differences } from '../../data';
import '../Button/Button.module.css';

export default function DifferencesSection() {

    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
      setContentType(type);
    }

    const differenceButtons = Object.keys(differences).map((differenceType) => (
      <Button
        key={differenceType}
        onClick={() => handleClick(differenceType)}
        isActive={contentType === differenceType}
      >
        {differenceType}
      </Button>
    ));

    return (
        <section>
        <h3>Differences</h3>
        {differenceButtons}

        {!contentType && <p>Click on the button to see the difference</p>}
        {contentType && <p>{differences[contentType]}</p>}
      </section>
    )
}