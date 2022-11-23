type Props = {
	name: string;
	options: { name: string; value: string }[];
	filter: string[];
	setFilter: ([]) => void;
};

export default function Filter({ name, options, setFilter, filter }: Props) {
	const [selectedFilterName, selectedFilterValue] = filter;
	const formattedFilterName = (name) => `/${name}s`;

	const handleChange = (e) => {
		if (e.target.value === "") {
			setFilter([]);
			return;
		}
		setFilter([formattedFilterName(name), e.target.value]);
	};

	return (
		<select
			name={name}
			id=""
			onChange={handleChange}
			value={
				selectedFilterName === formattedFilterName(name)
					? selectedFilterValue
					: ""
			}
		>
			<option value="">{name}</option>
			{options.map(({ name, value }) => (
				<option value={value} key={value}>
					{name}
				</option>
			))}
		</select>
	);
}
