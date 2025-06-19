export default function TableBody() {
    const projectsList = [
        {
            day: '01', topic: 'React Setup', project: 'Static Profile Card', url: 'https://static-profile-card.vercel.app/', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day01'
        },
        {
            day: '02', topic: 'Props & Reusability', project: 'Team Member Cards', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day02'
        },
        {
            day: '03', topic: 'State with useState', project: 'Counter App', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day03'
        },
        {
            day: '04', topic: 'Event Handling', project: 'Toggle Visibility', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day04'
        },
        {
            day: '05', topic: 'Input Handling', project: 'Character Counter', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day05'
        },
        {
            day: '06', topic: 'Forms', project: 'Basic Form with Validation', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day06'
        },
        {
            day: '07', topic: 'Project Build', project: 'Multi-input Form', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day07'
        },
        {
            day: '08', topic: 'useEffect', project: 'Document Title Changer', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day08'
        },
        {
            day: '09', topic: 'Fetching API', project: 'Joke Generator', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day09'
        },
        {
            day: '10', topic: 'Conditional Rendering', project: 'Quote Fetcher w/ Loader', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day10'
        },
        {
            day: '11', topic: 'Lists & Keys', project: 'Simple To-Do List', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day11'
        },
        {
            day: '12', topic: 'Styling (Tailwind/CSS)', project: 'Styled Card', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day12'
        },
        {
            day: '13', topic: 'Props Drilling', project: 'Profile w/ Nested Components', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day13'
        },
        {
            day: '14', topic: 'Project Build', project: 'GitHub User Finder', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day14'
        },
        {
            day: '15', topic: 'React Router Basics', project: 'Multi-page App', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day15'
        },
        {
            day: '16', topic: 'Nested Routes & Params', project: 'Blog Viewer', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day16'
        },
        {
            day: '17', topic: 'useRef', project: 'Focus Input on Load', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day17'
        },
        {
            day: '18', topic: 'useReducer', project: 'Complex Counter', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day18'
        },
        {
            day: '19', topic: 'useContext', project: 'Theme Switcher', url: '', github: 'https://github.com/ravi18kumar2021/30DaysOfReact/tree/main/Day19'
        },
    ];
    return (
        <div className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto my-4 overflow-x-auto">
            <table className="w-full border-collapse border text-xs md:text-sm lg:text-md border-gray-400">
                <thead>
                    <tr className="border border-gray-400 bg-gray-500 text-white">
                        <th className="py-2 px-3">Day</th>
                        <th className="py-2">Topic</th>
                        <th className="py-2">Project</th>
                        <th className="py-2">View</th>
                    </tr>
                </thead>
                <tbody>
                    {projectsList.map((item) => (
                        <tr key={item.day}>
                            <td className="border border-gray-400 py-2 px-3">{item.day}</td>
                            <td className="border border-gray-400 py-2">{item.topic}</td>
                            <td className="border border-gray-400 py-2">{item.project}</td>
                            <td className="border border-gray-400 py-2 px-3">
                                <a className="text-blue-400 underline" href={item.url} target="_blank">Demo</a> | <a className="text-violet-400 underline" href={item.github} target="_blank">GitHub</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}