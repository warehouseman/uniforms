import Add            from 'material-ui/svg-icons/content/add';
import IconButton     from 'material-ui/IconButton';
import React          from 'react';
import connectField   from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const ListAdd = ({
    disabled,
    parent,
    value,
    ...props
}) => {
    const limitNotReached = !disabled && !(parent.maxCount <= value.length);

    return (
        <IconButton
            {...filterDOMProps(props)}
            onTouchTap={() => limitNotReached && parent.onChange(parent.value.concat([value]))}
        >
            <Add />
        </IconButton>
    );
};

export default connectField(ListAdd, {includeParent: true, initialValue: false});