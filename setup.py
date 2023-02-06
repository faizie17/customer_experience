from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in customer_experience/__init__.py
from customer_experience import __version__ as version

setup(
	name="customer_experience",
	version=version,
	description="Customer Experience Management",
	author="frappe",
	author_email="faiziefaizal95@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
