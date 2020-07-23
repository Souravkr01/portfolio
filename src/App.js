import React from 'react';
import './App.css';

function App() {
	return (
		<div className="resume">
			<div className="my-detail">
				<div className="header">
					<h1>SOURAV KUMAR</h1>
					<a href="https://www.linkedin.com/in/sourav-kumar-93aa86182" target="_blank" rel="noopener noreferrer" className="linkedin-a">
						<img className="linkedin" src="linked.jpg" alt="linkedin"/>
					</a>
				</div>


				<div className="detail">
					<div className="image-container">
					</div>



					<p className="tab-detail">My name is <b>Sourav Kumar</b>.<br />
					I am pursuing B.Tech in CSE.<br /></p>


				</div>
			</div>
			<div>
				<div className="career-objective gradient-background">
					<h1 className="header-style">CAREER OBJECTIVE</h1>
					<p className="tab-detail">I want to put my creative skills, innovation and dedication to work towards the growth of the
					organization and prove myself worthy, energetic and a smart engineer and want to evolve continuously
					through learning.</p>
				</div>
				<div className="synopsis gradient-background">
					<h1 className="header-style">SYNOPSIS</h1>
					<ul className="tab-detail">
						<li>Self-motivated with an urge to serve the organization and evolve through learning.</li>
						<li>Creative and innovative mind.</li>
						<li>Keen to learn new things and gain experience through working in organization.</li>
						<li>Want to be a part of developing corporate and gain special importance in society.</li>
					</ul>
				</div>
				<div className="academics gradient-background">
					<h1 className="header-style">ACADEMICS</h1>
					<div className="table-container">
						<table className="tab-detail">
							<tbody>
								<tr>
									<th>Degree / Qualification</th>
									<th>Institute</th>
									<th>Board / University</th>
									<th>Year of Passing</th>
									<th>Aggregate % / CGPA</th>
								</tr>
								<tr>
									<td>B. Tech, CSE</td>
									<td>Gandhi Engineering College, Bhubaneswar</td>
									<td>BPUT</td>
									<td>2022 (Pursuing)</td>
									<td>7.35, Till 3rd Sem</td>
								</tr>
								<tr>
									<td>12th Science</td>
									<td>Jamshedpur Co-Operative College</td>
									<td>JAC</td>
									<td>2018</td>
									<td>60.4</td>
								</tr>
								<tr>
									<td>10th</td>
									<td>KPS KADMA</td>
									<td>ICSE</td>
									<td>2015</td>
									<td>67.83</td>
								</tr>
							</tbody>
						</table>

					</div>
				</div>
				<div className="subject-interest gradient-background">
					<h1 className="header-style">SUBJECTS OF INTEREST</h1>
					<ul className="tab-detail">
						<li>Java Programming</li>
						<li>Web Development</li>
						<li>Python Programming</li>
					</ul>
				</div>
				<div className="accolades gradient-background">
					<h1 className="header-style">ACCOLADES</h1>
					<ul className="tab-detail">
						<li>Secured <b>4th</b> and <b>5th</b> position in <b>Hindi Pakhwada</b> debate competition held at 
						<b>IIT BHUBANESWAR</b> in the year 2018 and 2019 respectively.</li>
						<li>College <b>3rd topper</b> in the <b>BRICS Summit</b> competition held at <b>GEC Tech
							Utsav</b>.</li>
						<li>Secured <b>4th</b> position in the <b>Man Ki baat</b> competition held at <b>IIIT
							BHUBANESWAR</b> in 2019.</li>
						<li>Secured <b>3rd</b> position in <b>Skit</b> competition held at GEC Gandhi Jayanti Utsav 2018.
					</li>
					</ul>
				</div>
				<div className="seminar gradient-background">
					<h1 className="header-style">SEMINARS</h1>
					<ul className="tab-detail">
						<li>Attended Seminar on <b>Computer Architecture & Artificial Intelligence</b> organized by Gandhi
						Engineering College, Bhubaneswar.</li>
					</ul>
				</div>
				<div className="extra-curricular  gradient-background">
					<h1 className="header-style">EXTRA-CURRICULAR</h1>
					<ul className="tab-detail">
						<li>Senior member of <b>SPURITHA Club</b> at <b>GEC Bhubaneswar</b>.</li>
						<li>Volunteer in the <b>Coder</b> event in Tech Utsav held at <b>GEC Bhubaneswar</b>.</li>
					</ul>
				</div>
			</div>


		</div>

	);
}

export default App;
