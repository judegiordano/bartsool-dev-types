import { IGame } from "../Shared";

export interface IBatter {
	last_name: string,
	first_name: string,
	display_name: string,
	position: string,
	bat_order: number,
	sub_bat_order: number,
	sacrifices: number,
	at_bats: number,
	plate_appearances: number,
	singles: number,
	doubles: number,
	triples: number,
	home_runs: number,
	sac_flies: number,
	sac_hits: number,
	stolen_bases: number,
	caught_stealing: number,
	rbi_with_two_outs: number,
	total_bases: number,
	runs: number,
	hits: number,
	rbi: number,
	walks: number,
	strike_outs: number,
	left_on_base: number,
	hit_by_pitch: number,
	team_abbreviation: string,
	ops: number, // decimal
	avg: number, // decimal
	obp: number, // decimal
	slg: number, // decimal
	at_bats_per_home_run: number, // decimal
	at_bats_per_rbi: number, // decimal
	walk_rate: number, // decimal
	plate_appearances_per_rbi: number, // decimal
	plate_appearances_per_home_run: number, // decimal
	extra_base_hits: number,
	stolen_base_average: number, // decimal
	strikeout_rate: number, // decimal
	ops_string: string,
	slg_string: string,
	obp_string: string,
	avg_string: string,
	batting_highlights: string
}

export interface IPitcher {
	last_name: string,
	first_name: string,
	display_name: string,
	pitch_order: number,
	win: boolean,
	loss: boolean,
	save: boolean,
	hold: boolean,
	era: number, // decmial
	whip: number, //decimal
	innings_pitched: number, //decimal
	hits_allowed: number,
	runs_allowed: number,
	earned_runs: number,
	walks: number,
	intentional_walks: number,
	strike_outs: number,
	home_runs_allowed: number,
	pitch_count: number,
	pitches_strikes: number,
	wild_pitches: number,
	hit_by_pitch: number,
	errors: number,
	team_abbreviation: string
}

export interface IFielder {
	last_name: string,
	first_name: string,
	display_name: string,
	errors: number,
	team_abbreviation: string
}

export interface IBatterTotal {
	sacrifices: number,
	at_bats: number,
	plate_appearances: number,
	singles: number,
	doubles: number,
	triples: number,
	home_runs: number,
	sac_flies: number,
	sac_hits: number,
	stolen_bases: number,
	caught_stealing: number,
	rbi_with_two_outs: number,
	total_bases: number,
	runs: number,
	hits: number,
	rbi: number,
	walks: number,
	strike_outs: number,
	left_on_base: number,
	hit_by_pitch: number,
	ops: number, // decimal
	avg: number, // decimal
	obp: number, // decimal
	slg: number, // decimal
	at_bats_per_home_run: number, // decimal
	at_bats_per_rbi: number, // decimal
	walk_rate: number, // decimal
	plate_appearances_per_rbi: number, // decimal
	plate_appearances_per_home_run: number, // decimal
	extra_base_hits: number,
	stolen_base_average: number, //decimal
	strikeout_rate: number, //decimal
	ops_string: string,
	slg_string: string,
	obp_string: string,
	avg_string: string,
	batting_highlights: string
}

/**
 *
 * MLB Game Metadata
 * @interface IMLBGameData
 */
export interface IMLBGameData extends IGame {
	away_errors: number,
	home_errors: number,
	away_batters: IBatter[],
	home_batters: IBatter[],
	away_pitchers: IPitcher[],
	home_pitchers: IPitcher[],
	away_fielding: IFielder[],
	home_fielding: IFielder[],
	away_batter_totals: IBatterTotal,
	home_batter_totals: IBatterTotal
}