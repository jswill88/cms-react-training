import { render } from "@testing-library/react";
import { Comic } from "components";


const testComic = {
	title: "Ant-Man (2003) #4",
	thumbnail: {
		"path": "http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890",
		"extension": "jpg"
	},
	issueNumber: 4,
	creators: {
		"items": [
			{
				"name": "Clayton Crain",
			}
		]
	},
	dates: [
		{
			"type": "onsaleDate",
			"date": "2099-08-28T00:00:00-0500"
		},
		{
			"type": "focDate",
			"date": "2019-08-05T00:00:00-0400"
		}
	]
}

const expectedRender = [
	{
		testId: "issue-number",
		value: "4",
	},
	{
		testId: "creators",
		value: "Crain, Clayton",
	},
	{
		testId: "published-date",
		value: "August 4th, 2019",
	}
]

describe("<Comic />", () => {
	it("renders the title", () => {
		const { getByRole } = render(<Comic {...testComic} />);
		expect(getByRole('heading').textContent).toBe(testComic.title)
	});

	
	it('renders the details', () => {
		const { getByTestId } = render(<Comic {...testComic} />);
		expectedRender.forEach(({ testId, value }) => {
			expect(getByTestId(testId).textContent).toBe(value)
		})
	})
})