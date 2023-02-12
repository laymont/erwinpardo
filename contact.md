---
layout: page
title: Contact
---

<section class="w-full h-screen mx-auto p-6 bg-[url('/assets/img/background_contact.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
	<div>
		<form novalidate="" class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-indigo-900/75 dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
		<h2 class="w-full text-3xl text-white font-bold leading-tight">Contact us</h2>
		<div>
			<label for="name" class="block mb-1 ml-1 text-white">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800">
		</div>
		<div>
			<label for="email" class="block mb-1 ml-1 text-white">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800">
		</div>
		<div>
			<label for="message" class="block mb-1 ml-1 text-white">Message</label>
			<textarea id="message" type="text" placeholder="Message..." class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button type="submit" class="w-full px-4 py-2 text-white font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Send</button>
		</div>
	</form>
	</div>
</section>