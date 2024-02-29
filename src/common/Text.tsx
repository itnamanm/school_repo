export const Text = ({ displayText, id }: { displayText: string, id: string }) => {
    return <li id={id}>{displayText}</li>;
}