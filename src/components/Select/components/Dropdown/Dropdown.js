import React from 'react';

import './Dropdown.scss';

const DropdownItem = ({ item, onSelectItem }) => {
    const onClickItem = React.useCallback(() => onSelectItem(item.value), [onSelectItem, item]);

    return (
        <li className="dropdown-list__item" onClick={onClickItem}>
            { item.label }
        </li>
    )
}

const Dropdown = ({ items=[], onSelectItem, onCloseDropdown }) => {
    const dropdown = React.useRef(null);
    
    React.useEffect(() => {
        dropdown.current.focus();
    }, []);

    return (
        <ul 
            className="dropdown-list" 
            tabIndex="0" 
            onBlur={onCloseDropdown}
            ref={dropdown} 
        > 
            {
                items.map((item) => (
                    <DropdownItem item={item} onSelectItem={onSelectItem} key={`item-${item.value}`} />
                ))
            }
        </ul>
    )
}

export default Dropdown;