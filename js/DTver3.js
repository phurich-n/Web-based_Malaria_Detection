function DecisionTree(hist) {
    var classes
    var para = 'Parasitized'
    var unin = 'Uninfected'
    if (hist[202] <= 0.0) {
        if (hist[206] <= 0.0) {
            if (hist[216] <= 0.0) {
                if (hist[232] <= 0.0) {
                    if (hist[208] <= 0.0) {
                        if (hist[220] <= 0.0) {
                            if (hist[0] <= 0.614) {
                                classes = unin
                            } else {
                                classes = unin
                            }
                        } else {
                            if (hist[136] <= 0.108) {
                                classes = para
                            } else {
                                classes = unin
                            }
                        }
                    } else {
                        if (hist[86] <= 0.0) {
                            if (hist[0] <= 0.583) {
                                classes = unin
                            } else {
                                classes = para
                            }
                        } else {
                            if (hist[98] <= 0135) {
                                classes = para
                            } else {
                                classes = unin
                            }
                        }
                    }
                } else {
                    if (hist[142] <= 0.46) {
                        if (hist[56] <= 0.619) {
                            if (hist[88] <= 0.285) {
                                classes = para
                            } else {
                                classes = unin
                            }
                        } else {
                            classes = unin
                        }
                    } else {
                        classes = unin
                    }
                }
            } else {
                if (hist[378] <= 0.003) {
                    if (hist[152] <= 0.281) {
                        if (hist[172] <= 0.062) {
                            if (hist[8] <= 0.359) {
                                classes = para
                            } else {
                                classes = unin
                            }
                        } else {
                            if (hist[252] <= 0.0) {
                                classes = unin
                            } else {
                                classes = para
                            }
                        }
                    } else {
                        if (hist[352] <= 0.0) {
                            classes = unin
                        } else {
                            classes = para
                        }
                    }
                } else {
                    classes = unin
                }
            }
        } else {
            if (hist[160] <= 0.06) {
                if (hist[510] <= 0.001) {
                    if (hist[262] <= 0.0) {
                        if (hist[146] <= 0.228) {
                            if (hist[256] <= 0.0) {
                                classes = para
                            } else {
                                classes = para
                            }
                        } else {
                            if (hist[234] <= 0.0) {
                                classes = unin
                            } else {
                                classes = para
                            }
                        }
                    } else {
                        if (hist[402] <= 0.004) {
                            if (hist[36] <= 0.663) {
                                classes = para
                            } else {
                                classes = unin
                            }
                        } else {
                            classes = unin
                        }
                    }
                } else {
                    classes = unin
                }
            } else {
                if (hist[248] <= 0.0) {
                    if (hist[376] <= 0.0) {
                        if (hist[0] <= 0.58) {
                            if (hist[152] <= 0.36) {
                                classes = unin
                            } else {
                                classes = para
                            }
                        } else {
                            if (hist[224] <= 0.0) {
                                classes = para
                            } else {
                                classes = unin
                            }
                        }
                    } else {
                        if (hist[338] <= 0.001) {
                            classes = para
                        } else {
                            classes = unin
                        }
                    }
                } else {
                    if (hist[59] <= 0.017) {
                        classes = para
                    } else {
                        classes = unin
                    }
                }
            }
        }
    } else {
        if (hist[288] <= 0) {
            if (hist[202] <= 0.024) {
                if (hist[238] <= 0) {
                    if (hist[162] <= 0.027) {
                        if (hist[272] <= 0) {
                            if (hist[138] <= 0.011) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[156] <= 0.316) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        }
                    } else {
                        if (hist[246] <= 0) {
                            if (hist[262] <= 0) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[174] <= 0.002) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Parasitized';
                            }
                        }
                    }
                } else {
                    if (hist[236] <= 0.011) {
                        if (hist[304] <= 0) {
                            if (hist[156] <= 0.024) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[0] <= 0.15) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        }
                    } else {
                        if (hist[266] <= 0) {
                            if (hist[158] <= 0.004) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            classes = 'Parasitized';
                        }
                    }
                }
            } else {
                if (hist[292] <= 0) {
                    if (hist[322] <= 0) {
                        if (hist[98] <= 0.001) {
                            if (hist[354] <= 0) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[114] <= 0.009) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        }
                    } else {
                        classes = 'Parasitized';
                    }
                } else {
                    if (hist[270] <= 0.005) {
                        if (hist[242] <= 0.193) {
                            if (hist[160] <= 0.145) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            classes = 'Uninfected';
                        }
                    } else {
                        if (hist[292] <= 0.002) {
                            classes = 'Uninfected';
                        } else {
                            classes = 'Parasitized';
                        }
                    }
                }
            }
        } else {
            if (hist[246] <= 0.028) {
                if (hist[48] <= 0.152) {
                    if (hist[120] <= 0.782) {
                        if (hist[32] <= 0.091) {
                            if (hist[38] <= 0.451) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[308] <= 0.001) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        }
                    } else {
                        classes = 'Uninfected';
                    }
                } else {
                    if (hist[352] <= 0.003) {
                        if (hist[60] <= 0.015) {
                            if (hist[98] <= 0.002) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            if (hist[168] <= 0.065) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        }
                    } else {
                        classes = 'Uninfected';
                    }
                }
            } else {
                if (hist[358] <= 0) {
                    if (hist[348] <= 0.001) {
                        if (hist[388] <= 0) {
                            if (hist[146] <= 0.025) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            classes = 'Parasitized';
                        }
                    } else {
                        if (hist[374] <= 0.002) {
                            classes = 'Parasitized';
                        } else {
                            classes = 'Uninfected';
                        }
                    }
                } else {
                    if (hist[172] <= 0) {
                        classes = 'Uninfected';
                    } else {
                        if (hist[276] <= 0) {
                            classes = 'Uninfected';
                        } else {
                            if (hist[250] <= 0.021) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Parasitized';
                            }
                        }
                    }
                }
            }
        }
    }
    return classes
}