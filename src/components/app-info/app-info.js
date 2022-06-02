import "./app-info.css";

const AppInfo = ({data, increasesEmployees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании ОАО "М.Видео"</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {increasesEmployees}</h2>
        </div>
    )
}

export default AppInfo;