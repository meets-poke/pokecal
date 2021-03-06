/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $gvars = Opal.gvars;

  Opal.add_stubs(['$setPrefixes', '$=~', '$gsub', '$arsmagica_stress', '$!=', '$>=', '$to_i', '$marshalSignOfInequality', '$empty?', '$parren_killer', '$rand', '$==', '$times', '$+', '$push', '$sortType', '$sort', '$join', '$>', '$<', '$*', '$sub', '$sendMode', '$die', '$check_suc']);
  return (function($base, $super, $parent_nesting) {
    function $ArsMagica(){};
    var self = $ArsMagica = $klass($base, $super, 'ArsMagica', $ArsMagica);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_ArsMagica_initialize_1, TMP_ArsMagica_gameName_2, TMP_ArsMagica_gameType_3, TMP_ArsMagica_getHelpMessage_4, TMP_ArsMagica_changeText_9, TMP_ArsMagica_dice_command_xRn_10, TMP_ArsMagica_check_nD10_11, TMP_ArsMagica_check_1D10_12, TMP_ArsMagica_arsmagica_stress_14;

    
    self.$setPrefixes(["ArS"]);
    
    Opal.defn(self, '$initialize', TMP_ArsMagica_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_ArsMagica_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_ArsMagica_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_ArsMagica_initialize_1, false), $zuper, $iter);
      return (self.sendMode = 2);
    }, TMP_ArsMagica_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_ArsMagica_gameName_2 = function $$gameName() {
      var self = this;

      return "アルスマギカ"
    }, TMP_ArsMagica_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_ArsMagica_gameType_3 = function $$gameType() {
      var self = this;

      return "ArsMagica"
    }, TMP_ArsMagica_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_ArsMagica_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・ストレスダイス　(ArSx+y)\n" + "　\"ArS(ボッチダイス)+(修正)\"です。判定にも使えます。Rコマンド(1R10+y[m])に読替をします。\n" + "　ボッチダイスと修正は省略可能です。(ボッチダイスを省略すると1として扱います)\n" + "　botchダイスの0の数が2以上の時は、数えて表示します。\n" + "　（注意！） botchの判断が発生したときには、そのダイスを含めてロールした全てのダイスを[]の中に並べて表示します。\n" + "　例) (1R10[5]) ＞ 0[0,1,8,0,8,1] ＞ Botch!\n" + "　　最初の0が判断基準で、その右側5つがボッチダイスです。1*2,8*2,0*1なので1botchという訳です。\n"
    }, TMP_ArsMagica_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_ArsMagica_changeText_9 = function $$changeText(string) {
      var TMP_5, TMP_6, TMP_7, TMP_8, self = this;

      
      if ($truthy(/ArS/i['$=~'](string))) {
        } else {
        return string
      };
      string = $send(string, 'gsub', [/ArS(\d+)([^\d\s][\+\-\d]+)/i], (TMP_5 = function(){var self = TMP_5.$$s || this, $a;

      return "" + "1R10" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](2))) + "[" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "]"}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));
      string = $send(string, 'gsub', [/ArS([^\d\s][\+\-\d]+)/i], (TMP_6 = function(){var self = TMP_6.$$s || this, $a;

      return "" + "1R10" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
      string = $send(string, 'gsub', [/ArS(\d+)/i], (TMP_7 = function(){var self = TMP_7.$$s || this, $a;

      return "" + "1R10[" + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1))) + "]"}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7));
      string = $send(string, 'gsub', [/ArS/i], (TMP_8 = function(){var self = TMP_8.$$s || this;

      return "1R10"}, TMP_8.$$s = self, TMP_8.$$arity = 0, TMP_8));
      return string;
    }, TMP_ArsMagica_changeText_9.$$arity = 1);
    
    Opal.defn(self, '$dice_command_xRn', TMP_ArsMagica_dice_command_xRn_10 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      return self.$arsmagica_stress(string, nick_e)
    }, TMP_ArsMagica_dice_command_xRn_10.$$arity = 2);
    
    Opal.defn(self, '$check_nD10', TMP_ArsMagica_check_nD10_11 = function $$check_nD10(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      
      if ($truthy(signOfInequality['$!='](">="))) {
        return ""};
      if ($truthy($rb_ge(total_n, diff))) {
        return " ＞ 成功"};
      return " ＞ 失敗";
    }, TMP_ArsMagica_check_nD10_11.$$arity = 8);
    
    Opal.defn(self, '$check_1D10', TMP_ArsMagica_check_1D10_12 = function $$check_1D10(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      
      if ($truthy(signOfInequality['$!='](">="))) {
        return ""};
      if ($truthy($rb_ge(total_n, diff))) {
        return " ＞ 成功"};
      return " ＞ 失敗";
    }, TMP_ArsMagica_check_1D10_12.$$arity = 8);
    return (Opal.defn(self, '$arsmagica_stress', TMP_ArsMagica_arsmagica_stress_14 = function $$arsmagica_stress(string, nick_e) {
      var $a, TMP_13, self = this, output = nil, reg1 = nil, reg2 = nil, reg3 = nil, reg4 = nil, reg5 = nil, reg6 = nil, reg7 = nil, reg8 = nil, diff = nil, botch = nil, bonus = nil, crit_mul = nil, total = nil, signOfInequality = nil, bonusText = nil, die = nil, count0 = nil, dice_n = nil, crit_dice = nil;
      if ($gvars.bonus == null) $gvars.bonus = nil;

      
      output = "1";
      if ($truthy(/(^|\s)S?(1[rR]10([\+\-\d]*)(\[(\d+)\])?(([>=]+)(\d+))?)(\s|$)/i['$=~'](string))) {
        } else {
        return "1"
      };
      reg1 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](1));
      reg2 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));
      reg3 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3));
      reg4 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](4));
      reg5 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](5));
      reg6 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](6));
      reg7 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](7));
      reg8 = (($a = $gvars['~']) === nil ? nil : $a['$[]'](8));
      diff = 0;
      botch = 1;
      bonus = 0;
      crit_mul = 1;
      total = 0;
      signOfInequality = "";
      bonusText = reg3;
      if ($truthy(reg4)) {
        botch = reg5.$to_i()};
      if ($truthy(reg6)) {
        
        signOfInequality = self.$marshalSignOfInequality(reg7);
        diff = reg8;};
      if ($truthy(bonusText['$empty?']())) {
        } else {
        bonus = self.$parren_killer("" + "(0" + (bonusText) + ")").$to_i()
      };
      die = self.$rand(10);
      output = "" + "(" + (reg2) + ") ＞ ";
      if ($truthy(die['$=='](0))) {
        
        count0 = 0;
        dice_n = [];
        $send(botch, 'times', [], (TMP_13 = function(i){var self = TMP_13.$$s || this, botch_die = nil;
if (i == null) i = nil;
        
          botch_die = self.$rand(10);
          if ($truthy(botch_die['$=='](0))) {
            count0 = $rb_plus(count0, 1)};
          return dice_n.$push(botch_die);}, TMP_13.$$s = self, TMP_13.$$arity = 1, TMP_13));
        if ($truthy(self.$sortType()['$!='](0))) {
          dice_n = dice_n.$sort()};
        output = $rb_plus(output, "" + "0[" + (die) + "," + (dice_n.$join(",")) + "]");
        if ($truthy(count0['$!='](0))) {
          
          bonus = 0;
          if ($truthy($rb_gt(count0, 1))) {
            output = $rb_plus(output, "" + " ＞ " + (count0) + "Botch!")
            } else {
            output = $rb_plus(output, " ＞ Botch!")
          };
          signOfInequality = "";
          } else {
          
          if ($truthy($rb_gt(bonus, 0))) {
            output = $rb_plus(output, "" + "+" + (bonus) + " ＞ " + (bonus))
          } else if ($truthy($rb_lt(bonus, 0))) {
            output = $rb_plus(output, "" + (bonus) + " ＞ " + (bonus))
            } else {
            output = $rb_plus(output, " ＞ 0")
          };
          total = bonus;
        };
      } else if ($truthy(die['$=='](1))) {
        
        crit_dice = "";
        while ($truthy(die['$=='](1))) {
          
          crit_mul = $rb_times(crit_mul, 2);
          die = $rb_plus(self.$rand(10), 1);
          crit_dice = $rb_plus(crit_dice, "" + (die) + ",");
        };
        total = $rb_times(die, crit_mul);
        crit_dice = crit_dice.$sub(/,$/, "");
        output = $rb_plus(output, "" + (total));
        if ($truthy(self.$sendMode()['$!='](0))) {
          output = $rb_plus(output, "" + "[1," + (crit_dice) + "]")};
        total = $rb_plus(total, bonus);
        if ($truthy($rb_gt(bonus, 0))) {
          output = $rb_plus(output, "" + "+" + (bonus) + " ＞ " + (total))
        } else if ($truthy($rb_lt(bonus, 0))) {
          output = $rb_plus(output, "" + (bonus) + " ＞ " + (total))};
        } else {
        
        total = $rb_plus(die, bonus);
        if ($truthy($rb_gt(bonus, 0))) {
          output = $rb_plus(output, "" + (die) + "+" + (bonus) + " ＞ " + (total))
        } else if ($truthy($rb_lt(bonus, 0))) {
          output = $rb_plus(output, "" + (self.$die($gvars.bonus)) + " ＞ " + (total))
          } else {
          output = $rb_plus(output, "" + (total))
        };
      };
      if ($truthy(signOfInequality['$!='](""))) {
        output = $rb_plus(output, self.$check_suc(total, 0, signOfInequality, diff, 1, 10, 0, 0))};
      return output;
    }, TMP_ArsMagica_arsmagica_stress_14.$$arity = 2), nil) && 'arsmagica_stress';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
