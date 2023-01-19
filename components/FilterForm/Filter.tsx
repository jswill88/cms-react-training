import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "state/AppContext";
import styles from "styles/Filter.module.css";

type Props = {
	name: string;
	options: { name: string; value: string }[];
};

export default function Filter({ name, options }: Props) {
	const { filter, setFilter } = useAppContext();
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
		<div className={styles.container}>
			<select
				name={name}
				id=""
				onChange={handleChange}
				value={
					selectedFilterName === formattedFilterName(name)
						? selectedFilterValue
						: ""
				}
				className={styles.select}
			>
				<option value="">{name}</option>
				{options.map(({ name, value }) => (
					<option value={value} key={value}>
						{name}
					</option>
				))}
			</select>
			<FontAwesomeIcon icon="angle-down" className={styles.icon}/>
		</div>
	);
}
