export const useScrollToSection = () => {
    const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault()
        const element = document.querySelector(sectionId)
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }

    return scrollToSection
}
