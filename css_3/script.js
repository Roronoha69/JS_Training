const inputs = document.querySelectorAll('.controls input')

function name() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(inputs => inputs.addEventListener('change', name))
inputs.forEach(inputs => inputs.addEventListener('mousemouve', name))