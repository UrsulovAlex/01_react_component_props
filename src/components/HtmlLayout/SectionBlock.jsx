export default function SectionBlock({title, children, ...props}) {
 return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}