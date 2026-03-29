import { svgIcon } from '../icons.js';
import { login, signUp } from '../state.js';

function getCopy(mode) {
  if (mode === 'signup') {
    return {
      title: 'Create your FlowForge account',
      subtitle: 'Set up a local demo account so the app can remember your name, theme, and workspace entry point.',
      submit: 'Sign up',
      alternate: 'Already have an account?',
      alternateCta: 'Log in',
      alternatePath: '/login',
    };
  }

  return {
    title: 'Welcome back',
    subtitle: 'Log in to continue with your saved local profile and jump into the FlowForge workspace.',
    submit: 'Log in',
    alternate: 'Need an account?',
    alternateCta: 'Sign up',
    alternatePath: '/signup',
  };
}

export function renderAuthPage(container, navigate, mode = 'login') {
  const copy = getCopy(mode);

  container.innerHTML = `
    <div class="auth-page">
      <div class="auth-card marketing-card">
        <div class="auth-copy">
          <span class="eyebrow">${mode === 'signup' ? 'Sign Up' : 'Login'}</span>
          <h1>${copy.title}</h1>
          <p>${copy.subtitle}</p>
        </div>

        <form class="auth-form" id="auth-form">
          <div class="form-field ${mode === 'signup' ? '' : 'hidden'}">
            <label for="auth-name">Name</label>
            <input id="auth-name" class="input-text" name="name" placeholder="Sandeep" />
          </div>
          <div class="form-field">
            <label for="auth-email">Email</label>
            <input id="auth-email" class="input-text" name="email" type="email" placeholder="you@example.com" />
          </div>
          <div class="form-field">
            <label for="auth-password">Password</label>
            <input id="auth-password" class="input-text" name="password" type="password" placeholder="Enter a password" />
          </div>
          <div class="form-feedback" id="auth-feedback" role="status" aria-live="polite"></div>
          <button class="btn btn-primary auth-submit" type="submit">${svgIcon('arrowRight')} ${copy.submit}</button>
        </form>

        <div class="auth-footer">
          <span>${copy.alternate}</span>
          <button class="btn btn-ghost" id="auth-switch">${copy.alternateCta}</button>
        </div>
      </div>
    </div>
  `;

  const form = container.querySelector('#auth-form');
  const feedback = container.querySelector('#auth-feedback');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const payload = {
      name: form.name?.value || '',
      email: form.email.value,
      password: form.password.value,
    };

    const result = mode === 'signup' ? signUp(payload) : login(payload);
    feedback.textContent = result.ok ? `${copy.submit} successful.` : result.error;
    feedback.classList.toggle('error', !result.ok);
    feedback.classList.toggle('success', result.ok);

    if (result.ok) {
      navigate('/users');
    }
  });

  container.querySelector('#auth-switch').addEventListener('click', () => navigate(copy.alternatePath));
}
