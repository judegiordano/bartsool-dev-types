/* eslint-disable @typescript-eslint/no-unused-vars */
import * as MLB from "./Types/Mlb";
import * as NBA from "./Types/Nba";
import * as Game from "./Types/Shared";

// game types
export import ITeamInfo = Game.ITeamInfo;
export import ISite = Game.ISite;
export import IEvent = Game.IEvent;
export import IOffical = Game.IOffical;
// mlb types
export import IBatter = MLB.IBatter;
export import IPitcher = MLB.IPitcher;
export import IFielder = MLB.IFielder;
export import IBatterTotal = MLB.IBatterTotal;
export import IMLBGameData = MLB.IMLBGameData;
// nba types
export import IPlayerStats = NBA.IPlayerStats;
export import IStatTotals = NBA.IStatTotals;
export import INBAGameData = NBA.INBAGameData;