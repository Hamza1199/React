function Hello() {
    return <div>Hello React!</div>;
    // browser actually executing:
    return React.createElement('div', null, 'Hello React!');
}

ReactDOM.render(
    <Hello />,
    document.getElementById('mountNode')
);