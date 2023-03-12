import * as React from 'react'

export default function TextArea(props) {
	// "props.value" toggles between "controlled" / "uncontrolled" modes
	const {
		defaultValue,
		className,
		rows,
		placeholder,
	} = props

	//local value, setValue
	const [_value, _setValue] = React.useState(defaultValue || "")
	const value = "value" in props ? props.value : _value
	const onChange = "value" in props ? (props?.onChange || (() => null)) : _setValue

	return (
		<textarea
			className={className}
			onChange={(event) => onChange(event.target.value, event)}
			placeholder={placeholder}
			rows={rows}
			value={value}
		/>
	)
}
