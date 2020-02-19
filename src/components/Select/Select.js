import React from 'react';

import SelectedItems from './components/SelectedItems/SelectedItems';
import Dropdown from './components/Dropdown/Dropdown';

import './Select.scss';

const Select  = ({ items, selectItemHandler }) => {
    const [isSelectOpen, toggleSelectOpen] = React.useState(false);
    const [selectedItems, changeSelectedItems] = React.useState([]);

    const onOpenSelect = React.useCallback(() => toggleSelectOpen(true), [toggleSelectOpen]);
    const onCloseSelect = React.useCallback(() => toggleSelectOpen(false), [toggleSelectOpen]);

    const onSelectItem = (value) => {
        if (!selectedItems.find((item) => item.value === value)) {
            const newSelectedItems = selectedItems.slice();
            const newItem = items.find((item) => item.value === value);
    
            if (newItem) {
                newSelectedItems.push(newItem);
                changeSelectedItems(newSelectedItems);
                selectItemHandler && selectItemHandler(newItem);
            }
        }
    }

    const onRemoveItem = (value) => {
        const newSelectedItems = selectedItems.slice();
        const itemIndex = selectedItems.findIndex((item) => item.value === value);
        newSelectedItems.splice(itemIndex, 1);
        changeSelectedItems(newSelectedItems);
    }

    const renderInputIcon = () => {
        if (isSelectOpen) {
            return <div onClick={onCloseSelect} className="select__input-icon">&lt;</div>
        }

        return <div onClick={onOpenSelect} className="select__input-icon">&gt;</div>
    }

    const renderDropdown = () => {
        if (isSelectOpen) {
            return (
                <Dropdown items={items} onSelectItem={onSelectItem} onCloseDropdown={onCloseSelect} />
            )
        }

        return null;
    }

    return (
        <div className="select">
            <div className="select__input">
                <SelectedItems items={selectedItems} onRemoveItem={onRemoveItem} />
                { renderInputIcon() }
            </div>
            { renderDropdown() }
        </div>
    )
};

export default Select;