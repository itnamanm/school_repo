import { useState } from 'react';
import { Text } from '../common/Text';
import data from '../mocks/school-data.json';

interface SelectedItem {
    dbn: string;
    overview_paragraph: string
}

export const Schools = () => {
    const schoolData = data ?? [];
    const [selectedItem, setSelectedItem] = useState<SelectedItem>({
        dbn: '',
        overview_paragraph: ''
    });


    const onLiClick = (event: any) => {
        const target = event.target;

        const selectedItem = target.getAttribute('id');
        const element = data.find(d => d.dbn === selectedItem);

        setSelectedItem(element as SelectedItem);
    }

    return (
        <ul onClick={onLiClick}>
            {schoolData.map((d: any) => {
                return (
                    <div key={d.dbn} style={{ cursor: 'pointer' }}>
                        <Text id={d.dbn} displayText={`${d.dbn} ${d.school_name}`} />
                        {selectedItem.dbn === d.dbn && (
                            <p>{selectedItem.overview_paragraph}</p>
                        )}
                    </div>
                )
            })}
        </ul>
    )
}

